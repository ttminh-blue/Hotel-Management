using System.ComponentModel.DataAnnotations.Schema;

namespace lazy_days_API.Models;

[Table("PHIEUDANGKYVANCHUYEN")]
public partial class Phieudangkyvanchuyen
{

	public string MaPhieudangkyvanchuyen { get; set; } = null!;


	public string? MaPhong { get; set; }

	public string? MaKh { get; set; }

	public string? MaNv { get; set; }

	public DateTime? NgayTao { get; set; }

	public int? SoLuong { get; set; }

	public string? HanhLy { get; set; }

}
