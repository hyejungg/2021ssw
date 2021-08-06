package com.springboot.domain.posts;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter(AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Toilet_info {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tid;

    @Column(length = 256, nullable = false)
    private String loc_name;

    @Column(length = 256, nullable = false)
    private String address;

    @Column
    private int latitude;

    @Column
    private int longtitude;

    @Column
    private int result;

    @OneToMany(mappedBy = "toilet_info")
    private List<Risk> risks = new ArrayList<>();

    public List<Risk> getRisks() {
        return risks;
    }

    public void setRisks(List<Risk> risks) {
        this.risks = risks;
    }
}
