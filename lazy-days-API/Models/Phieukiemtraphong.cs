using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Phieukiemtraphong
{
    public string MaPhieukt { get; set; } = null!;

    public DateTime? ThoiGianLap { get; set; }

    public string? TrangThai { get; set; }

    public double? TongTienBoiThuong { get; set; }

    public string? MaNv { get; set; }

    public string? MaHd { get; set; }

    public virtual ICollection<Chitietphieukiemtraphong> Chitietphieukiemtraphongs { get; } = new List<Chitietphieukiemtraphong>();

    public virtual Hoadon? MaHdNavigation { get; set; }

    public virtual Nhanvien? MaNvNavigation { get; set; }
}
