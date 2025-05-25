package service;

package com.jobseeking.service;

import dto.job.JobPostRequest;
import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class JobService {
    private final JobPostRepository jobPostRepository;

    public JobPost createJob(JobPostRequest request, User recruiter) {
        JobPost job = JobPost.builder()
                .title(request.getTitle())
                .company(recruiter.getName())
                .location(request.getLocation())
                .type(request.getType())
                .experience(request.getExperience())
                .salary(request.getSalary())
                .description(request.getDescription())
                .requirements(request.getRequirements())
                .postedDate(LocalDate.now())
                .deadline(request.getDeadline())
                .status(request.getStatus())
                .recruiter(recruiter)
                .build();

        return jobPostRepository.save(job);
    }

    public JobStatsResponse getRecruiterStats(Long recruiterId) {
        List<JobPost> jobs = jobPostRepository.findByRecruiterId(recruiterId);
        
        return JobStatsResponse.builder()
                .totalJobs(jobs.size())
                .activeJobs((int) jobs.stream()
                        .filter(j -> j.getStatus() == JobPost.JobStatus.ACTIVE).count())
                .closedJobs((int) jobs.stream()
                        .filter(j -> j.getStatus() == JobPost.JobStatus.CLOSED).count())
                .totalApplications(jobs.stream()
                        .mapToInt(j -> j.getApplications().size()).sum())
                .build();
    }
}