using System.Data.SqlClient;

namespace lazy_days_API.Services
{
	public interface IService
	{
		public SqlConnection CreateConnection();
	}
}
