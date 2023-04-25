using System;
using System.Collections.Generic;

namespace lazy_days_API.Models;

public partial class Khachhang
{
    public string MaKh { get; set; } = null!;

    public string? TenKh { get; set; }

    public string? Cmnd { get; set; }

    public string? DiaChi { get; set; }

    public string? Sdt { get; set; }

    public string? Email { get; set; }

    public string? Fax { get; set; }

    public int? SoDemLuuTru { get; set; }

    public string? YeuCauDb { get; set; }

    public string? TrangThaiDatPhong { get; set; }

    public virtual ICollection<Dondatxe> Dondatxes { get; } = new List<Dondatxe>();

    public virtual ICollection<Feedback> Feedbacks { get; } = new List<Feedback>();

    public virtual ICollection<Phieudatphong> Phieudatphongs { get; } = new List<Phieudatphong>();

    public virtual ICollection<Phieudktour> Phieudktours { get; } = new List<Phieudktour>();

    public virtual ICollection<Yeucaudacbiet> Yeucaudacbiets { get; } = new List<Yeucaudacbiet>();

    public virtual ICollection<Congtydulich> MaCties { get; } = new List<Congtydulich>();

    public virtual ICollection<Doan> MaDoans { get; } = new List<Doan>();
}
