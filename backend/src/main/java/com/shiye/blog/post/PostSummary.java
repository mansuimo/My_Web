package com.shiye.blog.post;

import java.time.LocalDate;

public record PostSummary(
        String slug,
        String title,
        String excerpt,
        String category,
        LocalDate publishedAt,
        int readMinutes
) {
}

