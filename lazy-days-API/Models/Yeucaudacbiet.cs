using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Yeucaudacbiet
{
    public string MaYcdc { get; set; } = null!;

    public string? MaKh { get; set; }

    public string TenYcdc { get; set; } = null!;

    public virtual Khachhang? MaKhNavigation { get; set; }
}
