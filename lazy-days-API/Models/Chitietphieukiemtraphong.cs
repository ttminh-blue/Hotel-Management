using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Chitietphieukiemtraphong
{
    public string MaPhieukt { get; set; } = null!;

    public int Stt { get; set; }

    public string? ChiTietHuhai { get; set; }

    public int? GiaBoiThuong { get; set; }

    public virtual Phieukiemtraphong MaPhieuktNavigation { get; set; } = null!;
}
