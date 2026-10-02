from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models import Base


class Department(Base):
    __tablename__ = "departments"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name_en: Mapped[str] = mapped_column(String(255))
    name_am: Mapped[str] = mapped_column(String(255), nullable=True)
    description: Mapped[str] = mapped_column(String, nullable=True)
    category: Mapped[str] = mapped_column(String(100), nullable=True)

    requisites: Mapped[list["DepartmentPrerequisite"]] = relationship(back_populates="department")


class DepartmentPrerequisite(Base):
    __tablename__ = "department_prerequisites"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    department_id: Mapped[int] = mapped_column(ForeignKey("departments.id"))
    subject_name: Mapped[str] = mapped_column(String(100))
    minimum_level: Mapped[int] = mapped_column(default=0)

    department: Mapped[Department] = relationship(back_populates="requisites")
