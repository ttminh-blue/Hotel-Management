using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Phanphong
{
    public string? MaNvql { get; set; }

    public string MaPhieuDp { get; set; } = null!;

    public string MaPhong { get; set; } = null!;

    public DateTime? NgayPhanPhong { get; set; }

    public DateTime? NgayNhan { get; set; }

    public virtual Nhanvien? MaNvqlNavigation { get; set; }

    public virtual Phieudatphong MaPhieuDpNavigation { get; set; } = null!;

    public virtual Phong MaPhongNavigation { get; set; } = null!;
}
