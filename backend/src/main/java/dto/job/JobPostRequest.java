package dto.job;



import com.jobseeking.model.JobPost.JobStatus;
import com.jobseeking.model.JobPost.JobType;
import lombok.Data;
import java.time.LocalDate;

@Data
public class JobPostRequest {
    private String title;
    private String location;
    private JobType type;
    private String experience;
    private String salary;
    private String description;
    private String requirements;
    private LocalDate deadline;
    private JobStatus status;
}

// JobStatsResponse.java
package com.jobseeking.dto.job;

import lombok.Data;

@Data
public class JobStatsResponse {
    private int totalJobs;
    private int activeJobs;
    private int draftJobs;
    private int closedJobs;
    private int totalApplications;
}