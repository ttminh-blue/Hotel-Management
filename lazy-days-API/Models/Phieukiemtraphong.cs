using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace lazy_days_API.Models;

[Table("PHIEUKIEMTRAPHONG")]
public partial class Phieukiemtraphong
{
    [Key]
    [Column("MA_PHIEUKT")]
    [StringLength(5)]
    [Unicode(false)]
    public string MaPhieukt { get; set; } = null!;

    [Column("THOI_GIAN_LAP", TypeName = "datetime")]
    public DateTime? ThoiGianLap { get; set; }

    [Column("TRANG_THAI")]
    [StringLength(20)]
    public string? TrangThai { get; set; }

    [Column("TONG_TIEN_BOI_THUONG")]
    public double? TongTienBoiThuong { get; set; }

    [Column("MA_NV")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaNv { get; set; }

    [Column("MA_HD")]
    [StringLength(5)]
    [Unicode(false)]
    public string? MaHd { get; set; }

    [InverseProperty("MaPhieuktNavigation")]
    public virtual ICollection<Chitietphieukiemtraphong> Chitietphieukiemtraphongs { get; } = new List<Chitietphieukiemtraphong>();

    [ForeignKey("MaHd")]
    [InverseProperty("Phieukiemtraphongs")]
    public virtual Hoadon? MaHdNavigation { get; set; }

    [ForeignKey("MaNv")]
    [InverseProperty("Phieukiemtraphongs")]
    public virtual Nhanvien? MaNvNavigation { get; set; }
}
