package com.springboot.service.posts;

import com.springboot.domain.posts.Notice;
import com.springboot.domain.posts.PostsRepository;
import com.springboot.web.dto.PostsResponseDto;
import com.springboot.web.dto.PostsSaveRequestDto;
import com.springboot.web.dto.PostsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class PostsService {
    private final PostsRepository postsRepository;

    @Transactional
    public Long save(PostsSaveRequestDto requestDto) {
        return postsRepository.save(requestDto.toEntity()).getNid();
    }

//    @Transactional
//    public Long update(Long id, PostsUpdateRequestDto requestDto) {
//        Notice posts = postsRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));
//
//        posts.update(requestDto.getTitle(), requestDto.getContent());
//
//        return id;
//    }

//    @Transactional
//    public void delete (Long id) {
//        Posts posts = postsRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));
//
//        postsRepository.delete(posts);
//    }
//
//    @Transactional
//    public PostsResponseDto findById(Long id) {
//        Notice entity = postsRepository.findById(id)
//                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + id));
//
//        return new PostsResponseDto(entity);
//    }
//
//    @Transactional(readOnly = true)
//    public List<PostsListResponseDto> findAllDesc() {
//        return postsRepository.findAllDesc().stream()
//                .map(PostsListResponseDto::new)
//                .collect(Collectors.toList());
//    }
}