using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Chitietthanhtoandv
{
    public string MaHd { get; set; } = null!;

    public string MaPhieudv { get; set; } = null!;

    public double? DonGia { get; set; }

    public string? MaKetoan { get; set; }

    public virtual Hoadon MaHdNavigation { get; set; } = null!;

    public virtual Nhanvien? MaKetoanNavigation { get; set; }

    public virtual Phieudangkydichvu MaPhieudvNavigation { get; set; } = null!;
}
