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
		private readonly IService _sqlFactory;

		public CleanningController(IService service)
		{
			_sqlFactory = service;
		}

		[HttpGet]
		public async Task<IActionResult> GetAllRequests()
		{
			try
			{
				await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();
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
        public async Task<IActionResult> UpdateCleanningRequest(string maPcdvs, string maNvvs)
        {
            try
            {
                await using SqlConnection sqlConnection = _sqlFactory.CreateConnection();

                var result = await sqlConnection.QueryFirstOrDefaultAsync("Select * from PHANCONGDONVESINH WHERE MA_PCDVS = @MA_PCDVS", new
                {
                    MA_PCDVS = maPcdvs
                });




                if (result.MA_NVVS == null)
                {
                    await sqlConnection.ExecuteAsync("Update PHANCONGDONVESINH SET MA_NVVS = @MaNvvs where MA_PCDVS = @MaPcdvs", new
                    {
                        MaNvvs = maNvvs,
                        MaPcdvs = maPcdvs
                    });
                    return Ok("Updated successfully.");

                }
                else if (result.MA_NVVS == maNvvs && result.THOIGIANKT == null)
                {
                    await sqlConnection.ExecuteAsync("Update PHANCONGDONVESINH SET THOIGIANKT = GETDATE() where MA_PCDVS = @MaPcdvs", new
                    {
                        MaPcdvs = maPcdvs
                    });
                    return Ok("Updated successfully.");
                }

                return Ok("This request already accepted by another staff.");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}
