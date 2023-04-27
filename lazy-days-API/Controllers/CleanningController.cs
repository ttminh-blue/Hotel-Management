using Dapper;
using lazy_days_API.Models.DTO;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class CleanningController : ControllerBase
	{
		private readonly IService _service;

		public CleanningController(IService service)
		{
			_service = service;
		}

		[HttpGet]
		public async Task<IActionResult> GetAllRequests()
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();
				var result = await sqlConnection.QueryAsync("SELECT VS.*, P.MA_PHONG, P.TEN_PHONG, P.LOAI, P.DIADIEM " +
					"FROM PHANCONGDONVESINH VS,  PHONG P " +
					"WHERE  P.MA_PHONG = VS.MA_PHONG");
				if (result == null) return NotFound();
				return Ok(result);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

		[HttpPut("accept_request")]
		public async Task<IActionResult> UpdateCleanningRequest(PhancongdonvesinhUpdateDTO phancongdonvesinh)
		{
			try
			{
				await using SqlConnection sqlConnection = _service.CreateConnection();
				await sqlConnection.ExecuteAsync("Update PHANCONGDONVESINH SET MA_NVVS = @MaNvvs, THOIGIANKT = GETDATE() where MA_PCDVS = @MaPcdvs", phancongdonvesinh);
				return Ok("Updated successfully.");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}

	}
}
