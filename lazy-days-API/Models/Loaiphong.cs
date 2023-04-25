using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Loaiphong
{
    public string Loaiphong1 { get; set; } = null!;

    public int? Giatien { get; set; }

    public virtual ICollection<Phieudatphong> Phieudatphongs { get; } = new List<Phieudatphong>();

    public virtual ICollection<Phong> Phongs { get; } = new List<Phong>();
}
