package com.example.GameReviewz.releases;

import com.example.GameReviewz.articles.GameArticles;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000/", "https://master.dgx57da20s84e.amplifyapp.com/","https://www.gamereviewz.dev"})
@RequestMapping("/api/v1/upcomingReleases")
@RestController
@AllArgsConstructor
public class ReleasesController {
    ReleasesService releasesService;

    @GetMapping("/releases")
    public ResponseEntity<List<UpcomingReleases>> getAllUpcomingReleases() throws Exception {
        return new ResponseEntity<>(releasesService.getAllUpcomingReleases(), HttpStatus.OK);
    }
}
