package org.agoncal.application.conference.schedule.domain;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Transient;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

/**
 * @author Antonio Goncalves
 *         http://www.antoniogoncalves.org
 *         --
 */
@Entity
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class Talk {

    // ======================================
    // =             Attributes             =
    // ======================================

    @Id
    private String id;
    @Transient
    private Map<String, URI> links;
    private String title;
    private String talkType;
    private String track;
    @ManyToMany
    private List<Speaker> speakers;

    // ======================================
    // =            Constructors            =
    // ======================================

    public Talk() {
    }

    public Talk(String id, String title) {
        this.id = id;
        this.title = title;
    }

    // ======================================
    // =          Getters & Setters         =
    // ======================================

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTalkType() {
        return talkType;
    }

    public void setTalkType(String talkType) {
        this.talkType = talkType;
    }

    public String getTrack() {
        return track;
    }

    public void setTrack(String track) {
        this.track = track;
    }

    public List<Speaker> getSpeakers() {
        return speakers;
    }

    public void setSpeakers(List<Speaker> speakers) {
        this.speakers = speakers;
    }

    public void addLink(String title, URI uri) {
        links = new HashMap<>();
        links.put(title, uri);
    }

    // ======================================
    // =   Methods hash, equals, toString   =
    // ======================================

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Talk room = (Talk) o;
        return Objects.equals(id, room.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Talk{" +
            "id='" + id + '\'' +
            ", links=" + links +
            ", title='" + title + '\'' +
            ", talkType='" + talkType + '\'' +
            ", track='" + track + '\'' +
            ", speakers=" + speakers +
            '}';
    }
}