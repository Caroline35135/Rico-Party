package rico.test;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


import rico.model.Admin;
import rico.model.Adresse;
import rico.model.Categorie;
import rico.model.Compte;
import rico.model.Contribution;
import rico.model.Event;
import rico.model.Message;
import rico.model.Participation;
import rico.model.User;
import rico.repo.ICompteRepo;
import rico.repo.IContributionRepo;
import rico.repo.IEventRepo;
import rico.repo.IMessageRepo;
import rico.repo.IParticipationRepo;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:application-context.xml")
public class RicoRepoTest {

	@Autowired
	private ICompteRepo compteRepo;

	@Autowired
	private IContributionRepo contributionRepo;

	@Autowired
	private IEventRepo eventRepo;

	@Autowired
	private IMessageRepo messageRepo;

	@Autowired
	private IParticipationRepo participationRepo;

	@Test
	public void test() {

		User user1 = new User("lay","caroline","caroline@lay","caroline");
		User user2 = new User("certain","cassandre","cassandre@certain","cassandre");
		Admin admin1 = new Admin("sultan","eric","eric@sultan","eric");

		user1 = compteRepo.save(user1);
		user2 = compteRepo.save(user2);
		admin1 = compteRepo.save(admin1);
		
		Adresse adresse1 = new Adresse("12","Avenue Victor Hugo","Montdidier","80500");
		
		Contribution contrib1 = new Contribution(Categorie.Alcool,"du pinard");
		Contribution contrib2 = new Contribution(Categorie.Sucre,"gateaux");
		
		List<Contribution> contributions1 = new ArrayList();
		contributions1.add(contrib1);
		contributions1.add(contrib2);
		
		
		Event event1 = new Event (LocalDate.parse("2022-07-22"), LocalTime.parse("21:00"), "Anniversaire Rico", "�a va �tre chouette", 100, 3,
				1000.0, "ricoco", user1, contributions1, adresse1);
		
		event1 = eventRepo.save(event1);
		
		
		Message message1= new Message("salut",LocalDate.parse("2022-07-22") , LocalTime.parse("19:00"), user1, event1);
		Message message2= new Message("ca va?",LocalDate.parse("2022-07-22") , LocalTime.parse("19:01"), user1, event1);
		
		List<Message> conversation = new ArrayList();
		conversation.add(message1);
		conversation.add(message2);
		
		event1.setMessages(conversation);
		
		Participation participation1= new Participation(2, "avec un pote", user2, contributions1,event1);
		
		
		
		
		
		
	}

}
