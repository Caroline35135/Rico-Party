package rico.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import rico.model.Contribution;



public interface IContributionRepo extends JpaRepository<Contribution, Long>{

}
