using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Goidichvu
{
    public string MaGoidv { get; set; } = null!;

    public string? TenGoidv { get; set; }

    public double? Gia { get; set; }

    public virtual ICollection<Chitietgdv> Chitietgdvs { get; } = new List<Chitietgdv>();

    public virtual ICollection<Phieudatphong> Phieudatphongs { get; } = new List<Phieudatphong>();
}
