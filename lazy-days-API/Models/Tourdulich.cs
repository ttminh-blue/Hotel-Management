using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Tourdulich
{
    public string MaTour { get; set; } = null!;

    public string? TenTour { get; set; }

    public string? Mota { get; set; }

    public double? Gia { get; set; }

    public string? MaDv { get; set; }

    public virtual Donviluuhanh? MaDvNavigation { get; set; }

    public virtual ICollection<Phieudktour> Phieudktours { get; } = new List<Phieudktour>();
}
