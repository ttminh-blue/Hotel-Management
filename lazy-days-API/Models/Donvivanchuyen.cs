using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Donvivanchuyen
{
    public string MaDonvivanchuyen { get; set; } = null!;

    public string? TenDonvi { get; set; }

    public DateTime? NgayGioithieu { get; set; }

    public double? PhiGioithieu { get; set; }

    public virtual ICollection<Dondatxe> Dondatxes { get; } = new List<Dondatxe>();
}
