package com.springboot.domain.posts;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Setter(AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long nid;

    @Column(length = 256, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @OneToOne
    @JoinColumn(name = "aid")
    private Admin admin;

    @Builder
    public Notice(String title, String content, Admin admin) {
        this.title = title;
        this.content = content;
        this.admin = admin;
    }

    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}