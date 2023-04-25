using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Donviluuhanh
{
    public string MaDv { get; set; } = null!;

    public string? TenDv { get; set; }

    public double? PhiGt { get; set; }

    public virtual ICollection<Tourdulich> Tourduliches { get; } = new List<Tourdulich>();
}
