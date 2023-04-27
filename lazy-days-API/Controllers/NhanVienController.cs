using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;

namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class NhanVienController : ControllerBase
	{
		private readonly IService service;

		public NhanVienController(IService service)
		{
			this.service = service;
		}



	}
}
