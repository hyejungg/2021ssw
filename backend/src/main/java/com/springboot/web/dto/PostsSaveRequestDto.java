package com.springboot.web.dto;


import com.springboot.domain.posts.Admin;
import com.springboot.domain.posts.Notice;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostsSaveRequestDto {
    private String title;
    private String content;
    private Admin admin;

    @Builder
    public PostsSaveRequestDto(String title, String content, Admin admin) {
        this.title = title;
        this.content = content;
        this.admin = admin;
    }

//    public Notice toEntity() {
//        return Notice.builder()
//                .title(title)
//                .content(content)
//                .admin(admin)
//                .build();
//    }

}