using Microsoft.AspNetCore.Mvc;

namespace lazy_days_API.Controllers
{
    public class HomeController2 : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
