package prashanth.sams;



import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;


import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;



import cucumber.api.Scenario;
import cucumber.api.java.After;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class Googlesearch {

	public WebDriver driver = new FirefoxDriver();

	@Given("^Google page \"([^\"]*)\"$")
	public void i_open_google_page_as(String URL) throws Throwable {
		driver.get(URL);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}


	@When("^I enter \"([^\"]*)\" in search box$")
	public void i_enter_in_search_box(String arg1) throws Throwable {
		driver.findElement(By.name("q")).sendKeys(arg1);
	}

	@When("^I press enter key$")
	public void i_press_enter_key() throws Throwable {
		driver.findElement(By.name("q")).submit();

	}

	@Then("^I should get the results of \"([^\"]*)\"$")
	public void i_should_see_results_of(String content) throws Throwable {

		Thread.sleep(3000L);
		boolean b = driver.getPageSource().contains(content);
		Assert.assertTrue(b);
	}

	@After
	public void after(Scenario scenario) {
		driver.close();
	}	

}
