package com.springboot.web.dto;

import com.springboot.domain.posts.Admin;
import com.springboot.domain.posts.Notice;
import lombok.Getter;

@Getter
public class PostsResponseDto {

    private Long nid;
    private String title;
    private String content;
    private Admin admin;

//    public PostsResponseDto(Notice entity) {
//        this.nid = entity.getNid();
//        this.title = entity.getTitle();
//        this.content = entity.getContent();
//        this.admin = entity.getAdmin();
//    }
}