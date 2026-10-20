from pydantic import BaseModel, Field, field_validator


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=30)
    phone: str = Field(pattern=r"^1[3-9]\d{9}$")
    company: str = Field(min_length=1, max_length=60)
    question: str = Field(default="", max_length=255)

    @field_validator("name", "company")
    @classmethod
    def strip_required_fields(cls, value: str) -> str:
        value = value.strip()
        if not value:
            raise ValueError("该字段不能为空")
        return value


class ContactResponse(BaseModel):
    id: int
    message: str
