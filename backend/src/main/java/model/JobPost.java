package model;
 

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;
import java.util.List;

@Entity
@Data
public class JobPost {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(nullable = false)
    private String company;
    
    @Column(nullable = false)
    private String location;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private JobType type;
    
    private String experience;
    private String salary;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String requirements;
    
    @Column(nullable = false)
    private LocalDate postedDate;
    
    @Column(nullable = false)
    private LocalDate deadline;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private JobStatus status;
    
    @ManyToOne
    @JoinColumn(name = "recruiter_id", nullable = false)
    private User recruiter;
    
    @OneToMany(mappedBy = "job")
    private List<Application> applications;
    
    public enum JobType {
        FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP
    }
    
    public enum JobStatus {
        ACTIVE, PAUSED, CLOSED
    }
}