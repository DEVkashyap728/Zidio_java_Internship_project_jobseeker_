package service;

@Service
@RequiredArgsConstructor
public class ProfileService {
    private final StudentProfileRepository profileRepository;
    private final UserRepository userRepository;

    public StudentProfile getStudentProfile(Long userId) {
        return profileRepository.findByUserId(userId);
    }

    public StudentProfile updateStudentProfile(StudentProfile profile, User user) {
        StudentProfile existingProfile = profileRepository.findByUserId(user.getId());
        
        if (existingProfile == null) {
            profile.setUser(user);
            return profileRepository.save(profile);
        }
        
        // Update fields
        existingProfile.setPhone(profile.getPhone());
        existingProfile.setLocation(profile.getLocation());
        existingProfile.setUniversity(profile.getUniversity());
        existingProfile.setDegree(profile.getDegree());
        existingProfile.setGraduationYear(profile.getGraduationYear());
        existingProfile.setBio(profile.getBio());
        existingProfile.setSkills(profile.getSkills());
        existingProfile.setGithubUrl(profile.getGithubUrl());
        existingProfile.setLinkedinUrl(profile.getLinkedinUrl());
        existingProfile.setPortfolioUrl(profile.getPortfolioUrl());
        
        return profileRepository.save(existingProfile);
    }
}