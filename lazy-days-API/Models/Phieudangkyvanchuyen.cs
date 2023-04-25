namespace lazy_days_API.Models;

public partial class Phieudangkyvanchuyen
{
	public string MaPhieudangkyvanchuyen { get; set; } = null!;

	public string? MaPhong { get; set; }

	public string? MaPhieuDp { get; set; }

	public string? MaNv { get; set; }

	public DateTime? NgayTao { get; set; }

	public string? HanhLy { get; set; }

	public int? SoLuong { get; set; }

}
