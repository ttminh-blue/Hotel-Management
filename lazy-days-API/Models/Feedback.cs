using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Feedback
{
    public string MaFb { get; set; } = null!;

    public string TenFb { get; set; } = null!;

    public string? MieuTaFb { get; set; }

    public string? LoaiFb { get; set; }

    public string? DanhGia { get; set; }

    public string? MaKh { get; set; }

    public virtual Khachhang? MaKhNavigation { get; set; }
}
