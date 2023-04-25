using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Phancongdonvesinh
{
    public string MaPcdvs { get; set; } = null!;

    public string? MaNvbellman { get; set; }

    public string? MaNvvs { get; set; }

    public string? MaPhong { get; set; }

    public DateTime? Thoigianbd { get; set; }

    public DateTime? Thoigiankt { get; set; }

    public virtual Nhanvien? MaNvbellmanNavigation { get; set; }

    public virtual Nhanvien? MaNvvsNavigation { get; set; }

    public virtual Phong? MaPhongNavigation { get; set; }
}
