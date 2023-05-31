package com.example.GameReviewz.releases;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReleasesService {
    @Autowired
    ReleasesRepository releasesRepository;
    public List<UpcomingReleases> getAllUpcomingReleases() throws Exception {
        List<UpcomingReleases> releases;
        try{
            releases = releasesRepository.findAll();
        }
        catch (Exception e){
            throw new Exception("No releases");
        }
        return releases;
    }
}
