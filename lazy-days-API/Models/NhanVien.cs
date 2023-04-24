using System.ComponentModel.DataAnnotations.Schema;

namespace lazy_days_API.Models;

[Table("NHANVIEN")]
public partial class Nhanvien
{
	public string? MaNv { get; set; } = null!;

	public string? TenNv { get; set; }


	public string? ChucVu { get; set; }

	public string? Email { get; set; }


	public string? GioiTinh { get; set; }


	public string? Sdt { get; set; }

	public string? Cmnd { get; set; }

	public DateTime? NgaySinh { get; set; }

	public DateTime? NgayThamGia { get; set; }

	public DateTime? DiaChi { get; set; }

	public double? Luong { get; set; }

}
