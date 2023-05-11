using Dapper;
using lazy_days_API.Models;
using lazy_days_API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace lazy_days_API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class FeedbackController : ControllerBase
	{
		private readonly IService _connectionFactory;

		public FeedbackController(IService connectionFactory)
		{
			_connectionFactory = connectionFactory;
		}

		[HttpPost]
		public async Task<IActionResult> post([FromForm] Feedback feedback)
		{
			try
			{
				await using SqlConnection sqlConnection = _connectionFactory.CreateConnection();

				await sqlConnection.ExecuteAsync("INSERT INTO FEEDBACK VALUES (@MA_FB, @TEN_FB, @MIEU_TA_FB, @LOAI_FB, @DANH_GIA, @MA_KH)", new
				{
					MA_FB = feedback.MaFb,
					TEN_FB = feedback.TenFb,
					MIEU_TA_FB = feedback.MieuTaFb,
					LOAI_FB = feedback.LoaiFb,
					DANH_GIA = feedback.DanhGia,
					MA_KH = feedback.MaKh
				});
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.Message);
			}
		}
	}
}
