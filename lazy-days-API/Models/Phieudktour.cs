using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Phieudktour
{
    public string MaP { get; set; } = null!;

    public DateTime? Ngaydangky { get; set; }

    public string? Tennguoidk { get; set; }

    public DateTime? Thoigiankhoihang { get; set; }

    public int? Songuoithamgia { get; set; }

    public string? Dichvuduadon { get; set; }

    public string? Trangthai { get; set; }

    public string? MaTour { get; set; }

    public string? MaKh { get; set; }

    public string? MaNv { get; set; }

    public virtual Khachhang? MaKhNavigation { get; set; }

    public virtual Nhanvien? MaNvNavigation { get; set; }

    public virtual Tourdulich? MaTourNavigation { get; set; }
}
