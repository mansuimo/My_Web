package com.shiye.blog.post;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {
    @GetMapping
    public List<PostSummary> list() {
        return List.of(
                new PostSummary(
                        "build-a-digital-garden",
                        "从零搭建一座数字花园",
                        "比起追逐流量，我更想要一块能够持续生长、彼此连接的网络自留地。",
                        "开发手记",
                        LocalDate.of(2026, 7, 26),
                        6
                ),
                new PostSummary(
                        "spring-vue-boundary",
                        "Vue 与 Spring 的边界",
                        "先让静态内容独立成立，再为真正需要动态能力的部分接入 API。",
                        "工程实践",
                        LocalDate.of(2026, 7, 12),
                        8
                )
        );
    }
}

