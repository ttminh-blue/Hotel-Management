namespace lazy_days_API.Models;

public partial class Phancongdonvesinh
{
	public string MaPcdvs { get; set; } = null!;

	public string? MaNvbellman { get; set; }

	public string? MaNvvs { get; set; }

	public string? MaPhong { get; set; } = String.Empty!;

	public DateTime? Thoigianbd { get; set; } = DateTime.Now;

	public DateTime? Thoigiankt { get; set; } = DateTime.Now;
}
