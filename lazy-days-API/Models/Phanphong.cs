using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[PrimaryKey("MaPhong", "MaPhieuDp")]
[Table("PHANPHONG")]
public partial class Phanphong
{

    public string MaNvql { get; set; }
    public string MaPhieuDp { get; set; }
    public string MaPhong { get; set; }
    public DateTime NgayPhanPhong { get; set; }
    public DateTime NgayNhan { get; set; }
}
