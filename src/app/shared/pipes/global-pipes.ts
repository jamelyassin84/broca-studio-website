import {AgePipe} from '@broca-studio/pipes/age.pipe'
import {AppendCountryCodePipe} from '@broca-studio/pipes/append-country-code.pipe'
import {AppendTaxPipe} from '@broca-studio/pipes/append-tax.pipe'
import {DayIntervalPipe} from '@broca-studio/pipes/day-interval.count.pipe'
import {DeductTaxPipe} from '@broca-studio/pipes/deduct-tax.pipe'
import {EntitiesPipe} from '@broca-studio/pipes/entity.pipe'
import {IsEvenPipe} from '@broca-studio/pipes/even.pipe'
import {FilterByDatePipe} from '@broca-studio/pipes/filterBy.pipe'
import {ToTimeIntervalPipe} from '@broca-studio/pipes/get-times.pipe'
import {HasDataPipe} from '@broca-studio/pipes/has-data.pipe'
import {HasDecimalPipe} from '@broca-studio/pipes/has.decimal.pipe'
import {InitialsPipe} from '@broca-studio/pipes/initials.pipe'
import {IsEmptyPipe} from '@broca-studio/pipes/is-empty.pipe'
import {ItemLengthPipe} from '@broca-studio/pipes/item.length.pipe'
import {KeywordFilterPipe} from '@broca-studio/pipes/keyword.filter.pipe'
import {LimitByPipe} from '@broca-studio/pipes/limit-by.pipe'
import {LoopUntilPipe} from '@broca-studio/pipes/loop-until.pipe'
import {NumberToArrayPipe} from '@broca-studio/pipes/number-to-array.pipe'
import {RemoveWhiteSpaceAndDashPipe} from '@broca-studio/pipes/remove-white-space-and-dash.pipe'
import {ShortenPipe} from '@broca-studio/pipes/shorten.day.pipe'
import {SingleEntityPipe} from '@broca-studio/pipes/single-entity.pipe'
import {SlugToSentencePipe} from '@broca-studio/pipes/slug-to-sentence.pipe'
import {SortByPipe} from '@broca-studio/pipes/sort-by.pipe'
import {TableFilterPipe} from '@broca-studio/pipes/table.filter.pipe'
import {TimePipe} from '@broca-studio/pipes/time.pipe'
import {ToAlphaThreePipe} from '@broca-studio/pipes/to-alpha-three.pipe'
import {ToCardImagePIpe} from '@broca-studio/pipes/to-card-image.pipe'
import {ToFixedTwoPipe} from '@broca-studio/pipes/to-fixed-two.pipe'
import {ToFlagPipe} from '@broca-studio/pipes/to-flag.pipe'
import {ToSlugPipe} from '@broca-studio/pipes/to-slug.pipe'
import {TwentyFourToTwelveHoursPipe} from '@broca-studio/pipes/twenty-four-to-twelve.hours.pipe'

export const globalPipes = [
    AgePipe,
    TimePipe,
    SortByPipe,
    ToFlagPipe,
    ToSlugPipe,
    IsEvenPipe,
    ShortenPipe,
    LimitByPipe,
    IsEmptyPipe,
    HasDataPipe,
    EntitiesPipe,
    InitialsPipe,
    DeductTaxPipe,
    AppendTaxPipe,
    HasDecimalPipe,
    ItemLengthPipe,
    AppendTaxPipe,
    ToFixedTwoPipe,
    ToCardImagePIpe,
    DayIntervalPipe,
    TableFilterPipe,
    ToAlphaThreePipe,
    FilterByDatePipe,
    SingleEntityPipe,
    NumberToArrayPipe,
    KeywordFilterPipe,
    ToTimeIntervalPipe,
    SlugToSentencePipe,
    AppendCountryCodePipe,
    LoopUntilPipe,
    RemoveWhiteSpaceAndDashPipe,
    TwentyFourToTwelveHoursPipe,
]
