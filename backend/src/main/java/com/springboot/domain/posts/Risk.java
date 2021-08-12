package com.springboot.domain.posts;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter(AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Risk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rid;

    @Column
    private boolean camera;

    @Column
    private boolean safe_check;

    @Column
    private boolean public_toilet;

    @Column
    private int score;

    @Column(length = 256, nullable = false)
    private String name;

    @Column(length = 256, nullable = false)
    private String pw;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String context;

    @ManyToOne(fetch = FetchType.LAZY) //연관관계 주인
    @JoinColumn(name = "tid")
    private Toilet_info toilet_info;

    public void changeToilet_info(Toilet_info toilet_info) {
        this.toilet_info = toilet_info;
        toilet_info.getRisks().add(this);
    }

}
