using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Dichvukhachsan
{
    public string MaDv { get; set; } = null!;

    public string? Tendichvu { get; set; }

    public double? Gia { get; set; }

    public string? Diadiem { get; set; }

    public virtual ICollection<Chitietgdv> Chitietgdvs { get; } = new List<Chitietgdv>();

    public virtual ICollection<Phieudangkydichvu> Phieudangkydichvus { get; } = new List<Phieudangkydichvu>();
}
