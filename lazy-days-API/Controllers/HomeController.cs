using Microsoft.AspNetCore.Mvc;

namespace lazy_days_API.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(); 
            // really deso ! su-chan wa demo ka ga ni ka sen si to, mo ni ka 
            // eh ~~~ hontou !!! mo-chan wa i de nai deeeeeeee ~~~
        }
    }
}
