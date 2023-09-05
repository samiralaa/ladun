<?php

namespace App\Filament\Resources\YearResource\Pages;

use App\Filament\Resources\YearResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateYear extends CreateRecord
{
    use CreateRecord\Concerns\Translatable;
    protected static string $resource = YearResource::class;

    protected function getActions(): array
    {
        return [
            Actions\LocaleSwitcher::make(),
            // ...
        ];
    }
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
