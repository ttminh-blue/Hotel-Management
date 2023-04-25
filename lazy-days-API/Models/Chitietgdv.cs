using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Chitietgdv
{
    public string MaGoidv { get; set; } = null!;

    public string MaDv { get; set; } = null!;

    public int? Giamgia { get; set; }

    public virtual Dichvukhachsan MaDvNavigation { get; set; } = null!;

    public virtual Goidichvu MaGoidvNavigation { get; set; } = null!;
}
