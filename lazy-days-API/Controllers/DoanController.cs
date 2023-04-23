using Microsoft.AspNetCore.Mvc;

namespace lazy_days_API.Controllers
{
    public class DoanController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
