package repository;



import com.jobseeking.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface JobPostRepository extends JpaRepository<JobPost, Long> {
    List<JobPost> findByRecruiterId(Long recruiterId);
    List<JobPost> findByStatus(JobPost.JobStatus status);
}
